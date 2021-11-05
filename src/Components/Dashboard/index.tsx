import MinhasInfos from '../MinhasInfos';
import Form from '../Formulario';
import { Container } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <MinhasInfos />
            <Form />
        </Container>
    );
}
