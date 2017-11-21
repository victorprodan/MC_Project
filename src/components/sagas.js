import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* loginUser(action) {
  try {
    const user = yield call(loginUser, action.payload)
    yield put({ type: 'LOGIN_USER_SUCCESS', user: user })
  } catch (error) {
    yield put({ type: 'LOGIN_USER_FAIL', error: 'Authentication Failed.', password: '', loading: false })
  }
}

function* mySaga() {
  yield takeEvery('LOGIN_USER', loginUser);
}

export default mySaga;
