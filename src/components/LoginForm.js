import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect, dispatch } from 'react-redux';
import { Button } from 'react-native-elements';
import { Card, CardSection, Input, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    // this.props.loginUser({ email, password });
    dispatch({ type: 'LOGIN_USER', payload: { email, password } })
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in
        </Button>
      );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.props.email}
            label="Email"
            placeholder='user@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
        <Input
          secureTextEntry
          value={this.props.password}
          label="Password"
          placeholder='password'
          onChangeText={this.onPasswordChange.bind(this)}
        />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
        {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
