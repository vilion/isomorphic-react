import React from 'react';

export default class extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            count: -1
        }
    }

    render() {
        return (
            <section className="mt-3 mb-2">
                <div className="notifications">
                    {this.state.count != -1 ? this.state.count: `Loading...`}
                </div>
            </section>
        )
    }
}
