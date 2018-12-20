# HubL Visual Studio Code Language Extension
A HubL language extension for the [Visual Studio Code IDE](https://code.visualstudio.com/), allowing for :rocket: fast local HubSpot CMS Platform development. For comprehensive HubL documentation, see the [HubL docs](https://designers.hubspot.com/docs/hubl/intro-to-hubl). All HubL snippets are auto-generated by the `hubl_snippets_gen.py` script to ensure the snippets are always up to date, and easy to maintain :potable_water:.  

![language extention demo](https://cdn2.hubspot.net/hubfs/2359872/IMPORTANT/DONOTDELETE/hubl-language-extension/vs_extension_3.gif)

## Features
### __HubL Snippets__  
All HubL supported tags, filters and functions have auto-complete snippts. Filters are accessed with `|` and fucntions/tags are acccessed with `~`. Entering `~` or `|` will produce all HubL snippets and further typing will narrow the results. All snippets include descriptions and parameter details. You up/down arrow to navigate the IntelliSense and hit enter to execute a snippet. Snippet completed HubL statements will auto-highlight avaiable parameters, which can be tabbed through.     

![Parameters](https://cdn2.hubspot.net/hubfs/2359872/IMPORTANT/DONOTDELETE/hubl-language-extension/details.png)
__HubL Tags__ produce entire HubL tag statements with available parameters. Ex `~he` > Enter produces:
```
{% header "my_header" header_tag="header_tag", value="value" %}
```
__HubL Filters__ produce entire HubL filter statements with available parameters. Ex `~se` > Enter produces:
```
|selectattr(attr, exp_test)
```
__HubL Functions__ produce entire HubL function statements with available parameters, without wrapping curly braces. The intenion of this is so you can  use HubL functions within other HubL statements easily (like setting variables, for loops, etc.) Ex `~hub` > Enter produces:
```
hubdb_table_rows(table_id,query)
```

_NOTE_: HubL tags, functions and filters are all pulled from the `cos-rendering/v1/hubldoc` api, so do not update the `snippets/hubl_filters.json`, `snippets/hubl_tags.json` or `snippets/hubl_.json` manually. Run `hubl_snippets_gen.py` to re-generate these JSON files when HubL changes occur. `snippets/hubl_extras.json` is for any extra/helpful snippets used in HubL - this file is maintained manually.

### __HubL Langage Configuration__  
`langconfig/language-configuration.json` contains some nice to haves when it comes to writing HubL. This supports auto completes of all HubL statement types and supports HubL statement swrapping (highlight text and  type HubL statement to wrap). Supports `{%%}`,`{##}`,`{{}}`

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contributing
Anyone should feel free to fork/PR this! Open source for the win :poop::poop::poop::poop:.
Please make sure and explain your changes thoroughly, update version and changelog where needed. See above note about `hubl_snippets_gen.py` for updating HubL snippet JSON files.   

To run locally, `git clone` repo and press `f5` to launch a new VSCode window with the extension installed. `CMD` + `R` to reload the window after having made any changes.  