import React from 'react';

class Graph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content;
    if (this.props.loading) {
      content = 
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
      </div>
    } else {
      content =
        <p>hi</p>
    }
    return (
      <div class = "graph">
        {content}
      </div>
    );
  }
}

export default Graph;
