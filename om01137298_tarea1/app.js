const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        // Estado inicial con frases y variables de edición
        const frases = ref([
            { frase: "Los programas deben escribirse para que las personas los lean, y solo incidentalmente para que las máquinas los ejecuten.", autor: 'Harold Abelson' },
            { frase: "Cualquier tonto puede escribir un código que una computadora pueda entender. Los buenos programadores escriben códigos que los humanos puedan entender.", autor: 'Martin Fowler' },
            { frase: "La única manera de aprender un nuevo lenguaje de programación es escribiendo programas en él.", autor: 'Dennis Ritchie' },
            { frase: "La simplicidad es el alma de la eficiencia.", autor: 'Agustin Freeman' },
            { frase: "Primero, resuelve el problema. Luego escribe el código.", autor: 'John Johnson' }
        ]);

        // Variable para controlar la fila que se está editando
        const editIndex = ref(null);
        const fraseOriginal = ref('');
        const autorOriginal = ref('');

        // Variables para nueva frase y autor
        const nuevaFrase = ref('');
        const nuevoAutor = ref('');

        // Función para comenzar la edición de una frase
        const iniciarEdicion = (index) => {
            editIndex.value = index;
            // Guardar los valores originales
            fraseOriginal.value = frases.value[index].frase;
            autorOriginal.value = frases.value[index].autor;
        };

        // Función para guardar la edición de una frase
        const guardarEdicion = () => {
            editIndex.value = null;
        };

        // Función para cancelar la edición de una frase
        const cancelarEdicion = (index) => {
            // Restaurar los valores originales
            frases.value[index].frase = fraseOriginal.value;
            frases.value[index].autor = autorOriginal.value;
            editIndex.value = null;
        };

        // Función para eliminar una frase
        const eliminarFrase = (index) => {
            if (confirm('¿Estás seguro de que quieres eliminar esta frase?')) {
                frases.value.splice(index, 1);
            }
        };

        // Función para agregar una nueva frase
        const agregarFrase = () => {
            if (nuevaFrase.value && nuevoAutor.value) {
                frases.value.push({
                    frase: nuevaFrase.value,
                    autor: nuevoAutor.value
                });
                // Limpiar los campos 
                nuevaFrase.value = '';
                nuevoAutor.value = '';
            } else {
                alert('Por favor, ingresa una frase y un autor.');
            }
        };

        return {
            frases,
            editIndex,
            nuevaFrase,
            nuevoAutor,
            iniciarEdicion,
            guardarEdicion,
            cancelarEdicion,
            eliminarFrase,
            agregarFrase
        };
    }
});

app.mount('#myapp');