import { useMediaQuery } from 'react-responsive'

const useMedia = () => {
    const isOnlyDesktop = useMediaQuery({
        query: '(min-width: 1025px)'
    });
    const isTablet = useMediaQuery({
        query: '(max-width: 1024px)'
    });
    const isMobile = useMediaQuery({
        query: '(max-width: 767px)'
    });
    const isSmallMobile = useMediaQuery({
        query: '(max-width: 500px)'
    });

    return { isTablet, isMobile, isOnlyDesktop, isSmallMobile }
}

export default useMedia;