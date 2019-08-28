import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { name, email } = steps;

        this.setState({ name, email });
    }

    render() {
        const { name, email } = this.state;
        return (
            <div style={{ width: '100%' }}>
                <h3>Summary</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{name.value}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{email.value}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

Review.propTypes = {
    steps: PropTypes.object,
};

Review.defaultProps = {
    steps: undefined,
};