function blobIcon() {

    return {
        circle: {
            url: localStorage.getItem('svgUrl') + "#myCircle"
        }
    }
}

export let icon = blobIcon()

function svgIcon() {

    return {
        circle: {
            url: "/svg/icon.svg#myCircle"
        }
    }
}

export let directSvg = svgIcon()

