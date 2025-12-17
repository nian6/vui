<script setup lang="ts">
import { computed } from 'vue';
import { useNamespace } from '@vui/hooks';

defineOptions({
  name: 'VFooter',
});

const ns = useNamespace('footer');

const props = defineProps<{
  height?: string;
}>();

const style = computed(() => {
  return props.height ? ns.cssVarBlock({ height: props.height }) : {};
});
</script>
<template>
  <footer :class="ns.b()" :style>
    <slot></slot>
  </footer>
</template>
