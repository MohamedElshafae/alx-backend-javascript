import { taskNext, taskFirst } from "./0-constants";

test('test 1', ()=> {
	expect(taskFirst()).toBe('I prefer const when I can.');
});

test('test 2', ()=> {
	expect(taskNext()).toBe('But sometimes let is okay');
});