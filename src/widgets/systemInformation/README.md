# System information widget
Show list various system information:
- browser (title and full version)
- browser's language version
- operation system
- screen resolution (width and height in pixels)
- is enabled JAVA
- is enabled cookie
- current timezone

## Example 
### Setting and view component
```js
const [types, setTypes] = useState([])

const handleChange = useCallback(setTypes, [types])

return (
<>
    <EditComponent
        onChange={handleChange}
        initialValues={types}
    />
    <ViewComponent types={types} />
</>
)
```
