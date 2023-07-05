import { createId } from './user-interface.utils';
import { v4 } from 'uuid';

describe('#createId', () => {
  let id: string;

  beforeEach(() => {
    id = v4();
  });
  it('should set input to valid uuid when id is not defined on input', () => {
    const input = createInput();
    id = createId(input, id);

    expect(input.id).toMatch(
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/
    );
    expect(id).toEqual(input.id);
  });

  it('should set component id to input id when input id is defined', () => {
    const input = createInput('test-id');
    id = createId(input, id);
    expect(input.id).toEqual('test-id');
    expect(id).toEqual('test-id');
  });
});

function createInput(id?: string): HTMLInputElement {
  const input = document.createElement('input') as HTMLInputElement;
  input.id = id ?? '';
  return input;
}
