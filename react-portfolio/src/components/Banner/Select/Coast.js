
export const Coast = {

    control: () => ({
        borderRadius: 5,
        height:25,
        backgroundColor: '#D2C8AC',
        width: 100,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 10,
    }),
    indicatorsContainer: () => ({
        display: 'none',
    }),
    placeholder: () => ({
        color: 'hsl(0,0%,100%)',
        gridArea: '1/1/1/1',
        marginLeft: '2px',
        marginRight: '150px',
        boxSizing: 'border-box',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }),

    input: () => ({
        color: '#D2C8AC',
        paddingBottom: '0px',
        visibility: 'visible',
        webkitFlex: '1 1 auto',
        msFlex: '1 1 auto',
        flex: '1 1 auto',
        display: 'inline-grid',
        gridArea: '1/1/2/3',
        gridTemplateColumns: '0 min-content',
        boxSizing: 'border-box',
    }) ,
    menu: (provided, state) => ({
        ...provided,
        backgroundColor: '#D2C8AC',

    }),
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'white' : 'brown',

    }),

    singleValue:() => ({
        color:  'hsl(0,0%,100%)',
        gridArea:' 1/1/2/3',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        opacity: 1,
        webkitTransition: 'opacity 300ms',
        transition: 'opacity 300ms',
    })


}