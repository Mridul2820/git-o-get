export const PreProcessSocialName= (socialobject) =>{
   
    if(socialobject.url.includes('linkedin') && socialobject.displayName.includes('company/')){
        const newName = socialobject.displayName.split('/')[1]
        return `in/${newName}`
    }


    return socialobject.displayName
}