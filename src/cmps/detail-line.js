import React from 'react';

function DetailLine({ label, items, item }) {

    return (
        <div className="detail-line">
            <span className="bold">{label}</span>
            {item &&
                <span>{' ' + item}</span>
            }
            {items &&
                <span>{items.map((item, idx) => {
                    if (idx === items.length - 1) {
                        return ' ' + item
                    }
                    return ' ' + item + ','
                })}
                </span>
            }
        </div>

    )
}

export default DetailLine

