import React from 'react';

import Modal from '../index';

export default function CreateTeamModal() {
    return (
        <Modal>
            <header>
                <h1>Create a team</h1>
            </header>
            <form>
                <label htmlFor="name">Team Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your best name for a team"
                />
            </form>
            <button type="submit">Criar</button>
            <button type="button">Cancelar</button>
        </Modal>
    );
}
