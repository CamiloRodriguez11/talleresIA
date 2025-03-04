const talleres = [
    { titulo: "PROBLEMA 1 - Problema del caballo ", resuelto: "archivos/problema1.pdf" },
    { titulo: "TALLER 1 - Historia y creacion de la inteligencia artificial", original: "archivos/taller1.pdf", resuelto: "archivos/taller1resuelto.pdf" },
    { titulo: "TALLER 2 - Tipologias de inteligencia artificial", original: "archivos/taller2.pdf", resuelto: "archivos/taller2resuelto.pdf" },
    { titulo: "TALLER 3 - Juegos de IA, Juego #3", original: "archivos/taller3.pdf", resuelto: "archivos/juego3.pdf", diapositivas:"archivos/juego3diapositivas.pdf" },
];


const talleresList = document.getElementById("talleresList");
talleres.forEach((taller, index) => {
    const tallerDiv = document.createElement("div");
    tallerDiv.classList.add("taller-container");
    
    const titulo = document.createElement("h3");
    titulo.textContent = taller.titulo;
    titulo.classList.add("taller-title");
    tallerDiv.appendChild(titulo);
    
    const fileContainer = document.createElement("div");
    fileContainer.classList.add("file-container");
    
    if (index === 0) { 
        const div = document.createElement("div");
        div.classList.add("file-card");
        
        const link = document.createElement("a");
        link.href = taller.resuelto;
        link.textContent = `${taller.titulo} - Resuelto`;
        link.target = "_blank";
        
        const iframe = document.createElement("iframe");
        iframe.src = taller.resuelto;
        iframe.classList.add("file-preview");
        
        div.appendChild(iframe);
        div.appendChild(link);
        fileContainer.appendChild(div);
    } else {
        [
            { tipo: "Original", url: taller.original },
            { tipo: "Resuelto", url: taller.resuelto },
            ...(taller.diapositivas ? [{ tipo: "Diapositivas", url: taller.diapositivas }] : [])
        ].forEach(archivo => {
            if (archivo.url) {
                const div = document.createElement("div");
                div.classList.add("file-card");
                
                const link = document.createElement("a");
                link.href = archivo.url;
                link.textContent = `${taller.titulo} - ${archivo.tipo}`;
                link.target = "_blank";
                
                const iframe = document.createElement("iframe");
                iframe.src = archivo.url;
                iframe.classList.add("file-preview");
                
                div.appendChild(iframe);
                div.appendChild(link);
                fileContainer.appendChild(div);
            }
        });
    }
    
    tallerDiv.appendChild(fileContainer);
    talleresList.appendChild(tallerDiv);
});
