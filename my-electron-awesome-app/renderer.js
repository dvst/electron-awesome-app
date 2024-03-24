
const func = async () => {
    const response = await window.versions.ping()
    const information = document.getElementById('info')
    information.innerText = response
    // information.innerText = `This app uses Chrome version: (v${versions.chrome()}), Node: (v${versions.node()}) and Electron (v${versions.electron()})`
    // console.log(response)
}

func()