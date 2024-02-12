export default function ThemeToggler(){
    let isOn = false
    let lightMode = <h1>Light mode on</h1>
    let darkMode = <h1>Dark mode on</h1>
    return(
        <div>
            {isOn?lightMode:darkMode}
        </div>
    )
}