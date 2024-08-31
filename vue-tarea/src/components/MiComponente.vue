<template>
  <div class="container">
    <h1 class="text-secondary my-4">Primer Componente</h1>

    <section class="mb-3">
      <h3 class="text-muted">Número: {{ numero }}</h3>
      <h3 class="text-muted">Contador: {{ contador }}</h3>
    </section>

    <button class="btn btn-success me-2" @click="incrementar">+1</button>
    <button class="btn btn-danger" @click="decrementar">-1</button>
  </div>
</template>

<script lang="ts">
import { computed, ref, defineComponent } from 'vue'

export default defineComponent({
  props: {
      value: { 
          type: Number, 
          required: true,
          default: 0 // Valor predeterminado 
      }
  },
  setup(props) {
      const numero = ref(props.value || 0) 
      const contador = computed(() => numero.value * numero.value) //calcular el contador

      const incrementar = () => numero.value++
      const decrementar = () => numero.value-- 

      return {
          numero, 
          contador,
          incrementar, 
          decrementar
      }
  }
})
</script>

<style scoped></style>
