import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function Category() {
    return (
        <div className="category">
            <ButtonGroup orientation="vertical" color="primary" aria-label="vertical contained primary button group" variant="text">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </div>
    )
}

export default Category
