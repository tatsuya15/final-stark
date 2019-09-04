import React from 'react';

const Floor = () => {
    let data = {
        character: '&#x2B22',
        rows: [12, 11, 12, 11, 12]
    }
    return (
        <div className="hexagons">
            {
                data.rows.map(row => {
                    let buffer = [];
                    for(let i=0;i<parseInt(row);i++) {
                        buffer.push(<span key={row + '_' + i} dangerouslySetInnerHTML={{__html: data.character}} />);
                    }
                    buffer.push(<br key={'br_' + row}/>);
                    return buffer;
                })

            }
        </div>
    )
}

export default Floor;
