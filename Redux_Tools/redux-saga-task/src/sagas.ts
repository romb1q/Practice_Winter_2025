import { call, put, takeLatest } from "redux-saga/effects";
import { fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure } from "./usersSlice";

function* fetchTodosSaga() {
  try {
    const response: Response = yield call(fetch, "https://jsonplaceholder.typicode.com/todos");
    const data = yield response.json();
    yield put(fetchTodosSuccess(data));
  } catch (error: any) {
    yield put(fetchTodosFailure(error.message));
  }
}

export function* watchTodosSaga() {
  yield takeLatest(fetchTodosRequest.type, fetchTodosSaga);
}
