let images = [
    'https://static.nationalgeographic.fr/files/styles/image_3200/public/nationalgeographic_1468962.webp?w=1600&h=900',
    'https://www.lepoint.fr/resizer/v2/HQKSKBVLRVMRPDVDI474XS3DXA.jpg?auth=56740f3084a208366e77179cf6d8d1c2733b59a16bb45f1d37b336af5d9179a7&width=765&height=575&smart=true',
    'https://www.zooplus.be/magazine/wp-content/uploads/2019/06/comprendre-le-langage-des-chats.webp',
    'https://static.nationalgeographic.fr/files/styles/image_3200/public/75552.ngsversion.1422285553360.webp?w=1600&h=900',
    'https://www.zooplus.be/magazine/wp-content/uploads/2023/11/chat-sauvage-europe1-1.webp'
]

// créer l'image principale
const mainImage = document.createElement('img')
mainImage.src = images[0]
mainImage.classList.add('big-image')
document.body.append(mainImage)

// créer le conteneur des petites image
const imgContainer = document.createElement('div')
imgContainer.classList.add('thumbnails-container')
document.body.append(imgContainer)

// ajouter toutes les petites images dans le conteneur
for (let url of images) {
    const im = document.createElement('img')
    im.src = url
    imgContainer.append(im)
    // ajouter un événement click sur chacune des petites images
    im.onclick = () => {
        mainImage.src = url
        for (let i of imgContainer.children) {
            i.classList.remove('active')
        }
        im.classList.add('active')
    }
}
