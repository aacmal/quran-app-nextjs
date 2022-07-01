export default function setTheme(theme){
    if(theme === 'dark'){
        document.documentElement.classList.add('dark')
    } else if (theme === 'default' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

}