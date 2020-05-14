# Widgets
[React.js](https://reactjs.org/) widget-components

## Usage
To get all widgets from the registry:
```
import { registry } from 'widgets'

const allWidgets = registry.getAll()
```

To get a specific widget from the registry:
```
import { registry } from 'widgets'

const widget = registry.get([widget code])
```

Each widget has the same structure:
```
{
    type: string, [widget type],
    name: string, [widget name],
    parent: string, [set of widgets of one group],
    ViewComponent: Component, [component for working with widget (as user mode)],
    EditComponent: Component, [widget customization component (as admin mode)],
    isExecutable: boolean, [widget status indicator (useful for defining APIs on a system)],
}
```
## Examples
Examples of usage of each widget: 
- [Contacts](./src/widgets/contacts/README.md)
- [Randomizer](./src/widgets/randomizer/README.md)
- [System information](./src/widgets/systemInformation/README.md)

## TODO

Organize:
- Clock [analog, digital]
- Diagram
- Todo list
- Calendar

Tools:
- Calculator
- Converter
- API Request [url, headers, body, [in init app, interval]]

Games:
- Sudoku
- Tick-Tack-Toe
- Snake
- Match 3
- Sea Battle

Editor:
- JSON
- Markdown
- Regular Expression
- SVG/2d/3d/Graph

Other:
- Validator (numbers, string, email, etc)
- Visualize color [hex, rgb(a), hsl, mix colors]
- Phase of Moon
- View metadata of file
- Metronome [generate audio in code]
- [Definer credit card](https://github.com/amarofashion/react-credit-cards)
- Encoder [Caesar's code, url, Morse]
- Text difference [like as BitBucket]
- Constructor for HTML-components [table, iframe, img, video]
- [Resolve mathematical formulas](https://www.mathjax.org/)
- Get dominant color images
- Graph

API's:
- Web Share
- WebAudio
- Push
- Service Workers
- Screen Orientation
- Vibration
- Web Speech
- Contacts
- Intl

[Star in Github for dev](https://evergreen.segment.com/components/corner-dialog/)
