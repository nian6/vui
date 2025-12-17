<script setup lang="ts">
import { useNamespace } from '@vui/hooks';
import { computed } from 'vue';

defineOptions({
  name: 'VContainer',
});

const ns = useNamespace('container');

const { vertical } = defineProps<{
  vertical?: boolean;
}>();

const cls = computed(() => {
  return [ns.b(), ns.is('vertical', vertical)];
});
</script>
<template>
  <section :class="cls">
    <slot></slot>
  </section>
</template>
