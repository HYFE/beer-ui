<template>
    <docs-page>
        <code-block title="代码用例"
                    :code="inputCode">
                 <input-demo></input-demo>
        </code-block>
        <code-block title="代码用例"
                    :code="textareaCode">
                 <textarea-demo></textarea-demo>
        </code-block>
    </docs-page>
</template>
<script>
import inputDemo from './input'
import inputCode from '!raw-loader!./input'
import textareaDemo from './textarea'
import textareaCode from '!raw-loader!./textarea'

export default {
    components: {
        inputDemo,
        textareaDemo
    },
    data() {
        return {
            inputCode,
            textareaCode
        }
    }
}
</script>
