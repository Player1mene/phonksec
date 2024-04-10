import React from 'react'

const useMedia = (media: string) => {

  const [match, setMatch] = React.useState<boolean | null>(null);

  React.useEffect(()=>{
    function changeMedia(){
        const { matches } = window.matchMedia(media);
        setMatch(matches);
    }changeMedia();
    window.addEventListener('resize', changeMedia);
    return () => { window.removeEventListener('resize', changeMedia); }
  },[media])

  return match;
}

export default useMedia