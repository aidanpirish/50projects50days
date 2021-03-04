import './App.css';

import html from './12_faq_collapse/index.html'
var htmlDoc = {__html: html};

function Project() {

  return (
    <div className="Project">
      <h1>Hello, world!</h1>
      <div dangerouslySetInnerHTML={htmlDoc} />
    </div>
  );
}

export default Project;
