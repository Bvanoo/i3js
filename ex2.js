let images = [
    'https://static.nationalgeographic.fr/files/styles/image_3200/public/nationalgeographic_1468962.webp?w=1600&h=900',
    'https://www.lepoint.fr/resizer/v2/HQKSKBVLRVMRPDVDI474XS3DXA.jpg?auth=56740f3084a208366e77179cf6d8d1c2733b59a16bb45f1d37b336af5d9179a7&width=765&height=575&smart=true',
    'https://www.zooplus.be/magazine/wp-content/uploads/2019/06/comprendre-le-langage-des-chats.webp',
    'https://static.nationalgeographic.fr/files/styles/image_3200/public/75552.ngsversion.1422285553360.webp?w=1600&h=900',
    'https://www.zooplus.be/magazine/wp-content/uploads/2023/11/chat-sauvage-europe1-1.webp'
]

for (let url of images) {
    // créer une image 
    let im = document.createElement('img')
    // modifier la src de l'image 
    im.src = url 
    // ajouter l'image dans le body 
    document.body.append(im)
    im.classList.add('photo')
}