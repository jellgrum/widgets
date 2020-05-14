# Randomizer widget
Randomizer with various settings:
- count symbols (generated string length)
- using unique symbols (boolean)
- character type (letters/numbers)
- letter case (ignore/lower case/upper case (only used if type = letters))

In viewing mode, there is a function of copying the generated result to the clipboard, if the browser has a copy API

## Example 
### Setting and view component
```js
const [settings, updateSettings] = useState()

const handleChange = useCallback(updateSettings, [settings])

return (
<>
    <EditComponent
        onChange={handleChange}
        initialValues={settings}
    />
    <ViewComponent settings={settings} />
</>
)
```
