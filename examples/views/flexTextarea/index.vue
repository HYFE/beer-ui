<template>
    <docs-page>
        <code-block title="代码用例"
                    :code="textareaCode">
                 <textarea-demo></textarea-demo>
        </code-block>
    </docs-page>
</template>
<script>
import textareaDemo from './textarea'
import textareaCode from '!raw-loader!./textarea'

export default {
    components: {
        textareaDemo
    },
    data() {
        return {
            textareaCode
        }
    }
}
</script>
