async function listaVideos() {
    const conexion = await fetch("http://localhost:3001/videos")

    const conexionConvertida = conexion.json();


    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video");
    }

    ////console.log(conexionConvertida);
    return conexionConvertida
}

async function enviarVideo(titulo,descripcion,url,imagem) {
    const conexion = await fetch("http://localhost:3001/videos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            descripcion:`${descripcion} mil visualizaciones`,
            url:url,
            imagem:imagem
        })
    })
    const conexionConvertida= conexion.json();

    return conexionConvertida;
}

//!PARA USAR LA BARRA DE BUSQUEDA
async function buscarVideos(palabraClave) {
    const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`) //! USAR q=tal cosa para poder buscar el video
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}


export const conexionAPI={
    listaVideos,enviarVideo,buscarVideos
}


////listaVideo();