import React from 'react'
import { HISTORY_BLOCK_TYPE, HistoryBlock, HistorySectionInfo } from './HistorySectionInfo';
import Code from '../../commons/highLighter';

const HistorySectionContent = ({info}: {info: HistorySectionInfo}) => {
  return (
    <div className="historyEntry">
        <h4>{info.versionTag}</h4>

        <div className="historySectionContent">
            {info.blocks.map( (block: HistoryBlock) => {
                
                switch(block.type){
                    case HISTORY_BLOCK_TYPE.TEXT: return <InnerText block={block} />;
                    case HISTORY_BLOCK_TYPE.CODE: return <InnerCode block={block} />;
                    case HISTORY_BLOCK_TYPE.IMAGE: return <InnerImage block={block} />;
                    default: return <InnerText block={block} />;
                }

            })}
            <br />
        </div>
    </div>
  )
};

const InnerText = ({block}:{block: HistoryBlock}) => {
    return(
        <div className="historyBlock innerText">
            <p>{block.payload}</p>
        </div>
    );
};

const InnerCode = ({block}:{block: HistoryBlock}) => {
    return(
        <div className="historyBlock innerText">
            <Code text={block.payload} />
        </div>
    );
};

const InnerImage = ({block}:{block: HistoryBlock}) => {
    return(
        <div className="historyBlock innerText">
            <img src={block.payload} alt="history block image" />
        </div>
    );
};

export default HistorySectionContent;