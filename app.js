class inventoryManager {
    constructor() {
        this.inventory = [];
        this.form = document.getElementById("productForm");
        this.tbody = document.getElementById("inventoryTable");
        this.total = document.getElementById("inventoryTotal");
        this.error = document.getElementById("error")
        this.handleEvent();
    }

    handleEvent(){
        this.form.addEventListener("submit", (e) => this.addProduct(e));
        this.tbody.addEventListener("click", (e) => this.handleCellClick(e) )
    }


    addProduct(e) {
        e.preventDefault();
        const productName = document.getElementById("productName").value;
        const productQuantity = parseFloat(document.getElementById("productQuantity").value); // Convertir a número
        const productPrice = parseFloat(document.getElementById("productPrice").value); // Convertir a número
        this.inventory.push({ productName, productQuantity, productPrice });
        this.updateTable();
        this.form.reset()
    }
    

    handleCellClick(e){
        const accion = e.target.dataset.accion;
        const indice = e.target.dataset.index;

        if (accion == "eliminar") {
            this.deleteProduct(indice)
        } else if (accion == "editar") {
            this.modifyProduct(indice)
        }
    }

    deleteProduct(index){
        this.inventory.splice(index, 1);
        this.updateTable();
    }

    modifyProduct(index){

    }

    updateTable() {
        this.tbody.innerHTML = "";
        let totalInventory = 0; // Para calcular el total del inventario
    
        this.inventory.forEach((product, index) => {
            const fila = document.createElement("tr");
    
            // Nombre
            const columnaNombre = document.createElement("td");
            columnaNombre.textContent = product.productName;
            fila.appendChild(columnaNombre);
    
            // Cantidad
            const columnaCantidad = document.createElement("td");
            columnaCantidad.textContent = product.productQuantity;
            fila.appendChild(columnaCantidad);
    
            // Precio Unitario
            const columnaPrecio = document.createElement("td");
            columnaPrecio.textContent = product.productPrice.toFixed(2); // Mostrar con 2 decimales
            fila.appendChild(columnaPrecio);
    
            // Total
            const columnaTotal = document.createElement("td");
            const total = product.productQuantity * product.productPrice; // Cálculo correcto
            columnaTotal.textContent = total.toFixed(2);
            fila.appendChild(columnaTotal);
    
            // Acciones
            const columnaAcciones = document.createElement("td");
    
            const botonEliminar = document.createElement("button");
            botonEliminar.dataset.accion = "eliminar";
            botonEliminar.dataset.index = index;
            botonEliminar.textContent = "Eliminar";
    
            const botonEditar = document.createElement("button");
            botonEditar.dataset.accion = "editar";
            botonEditar.dataset.index = index;
            botonEditar.textContent = "Editar";
    
            columnaAcciones.appendChild(botonEliminar);
            columnaAcciones.appendChild(botonEditar);
            fila.appendChild(columnaAcciones);
    
            // Agregar fila a la tabla
            this.tbody.appendChild(fila);
    
            // Acumular total del inventario
            totalInventory += total;
        });
    
        // Actualizar el total del inventario
        this.total.textContent = totalInventory.toFixed(2);
    }
    
    

}   
new inventoryManager()