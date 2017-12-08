<template>
  <docs-page>
      <code-block title="基本用法" :code="baseCode" desc="textarea 高度自适应">
          <base-demo></base-demo>
      </code-block>
  </docs-page>
</template>
<script>
import baseDemo from './base'
import baseCode from '!raw-loader!./base'

export default {
    components: {
        baseDemo
    },
    data() {
        return {
            baseCode
        }
    }
}
</script>
