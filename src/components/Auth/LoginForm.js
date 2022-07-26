import React from "react";
import Container from "../common/Container";
import Form from "../common/Form";
import InLineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "../common/Button";

const LoginForm = (props) => {

    const handleChange = (e) => {
        props.updateForm(e.target.id, e.target.value)
    }

    return (
        <Container>
            <Form onSubmit={props.onSubmit} style={{marginTop: '1em'}}>
                <InLineInputContainer>
                    <Input
                    name="id"
                    id="id"
                    placeholder="Student Id"
                    value={props.query.id}
                    onChange={handleChange}
                    required
                    />
                </InLineInputContainer>
                <InLineInputContainer>
                    <Input
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={props.query.password}
                    onChange={handleChange}
                    required
                    type="password"
                    />
                </InLineInputContainer>
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default LoginForm