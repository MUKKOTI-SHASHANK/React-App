import React from 'react';

const Colour = (props) => {
  const { config, setNextBackground } = props
  const { background } = config;
  // console.log(config);
  return (
    <button className={config.classname} onClick={() => setNextBackground({background: background})}>
      {config.label}
    </button>
  )
}
export default Colour;