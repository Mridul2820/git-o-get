export const PreProcessSocialName= (socialobject) =>{
   
    if(socialobject.url.includes('linkedin')){
        const newName = socialobject.displayName.split('/')[1]
        return `${newName}`
    }


    return socialobject.displayName
}