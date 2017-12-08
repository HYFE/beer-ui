<template>
    <docs-page>
        {% if hasExample %}
        <code-block title="基本用法"
                    :code="baseCode"
                    desc="示例说明">
            <baseDemo></baseDemo>
        </code-block>
        {% endif %}
    </docs-page>
</template>
{% if hasExample %}
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
{% endif %}
