import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('deve adicionar dois comentarios', () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target:{
                value: 'comentario adicionado teste',
            }
        });

        fireEvent.click(screen.getByTestId('comment-button'));

        fireEvent.change(screen.getByTestId('comment-textarea'),{
            target:{
                value:'segundo comentario adicionado teste',
            }
        });

        fireEvent.click(screen.getByTestId('comment-button'));
    });
});

