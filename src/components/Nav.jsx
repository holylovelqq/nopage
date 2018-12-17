import React from "react";
import { Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import github from '../svg/github-icon.svg';
import config from "../config.js";

const logo = 'https://img.alicdn.com/tfs/TB1BaF2ueuSBuNjy1XcXXcYjFXa-275-191.svg';

class App extends React.Component {

    state = {
        current: '0',
    }

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <Row>
                <Col span={6}>
                    <Menu mode="horizontal" style={{ lineHeight: '64px', paddingLeft: '20px' }}>
                        <img src={logo} className="app-logo" alt="logo" />
                        <span className="font-weight">{config.title}</span>
                    </Menu>
                </Col>
                <Col span={16}>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        {config.repos.map((repo, index) => {
                            return <Menu.Item key={index} style={{ lineHeight: '64px' }}>
                                <Link to={`/${repo.namespace}`}>{repo.name}</Link>
                            </Menu.Item>
                        })}
                    </Menu>
                </Col>
                <Col span={2}>
                    <Menu mode="horizontal" style={{ lineHeight: '64px' }}>
                        <a href={config.githubUrl} target="_blank" rel="noopener noreferrer">
                            <img src={github} className="github-logo" alt="logo" />
                        </a>
                    </Menu>
                </Col>
            </Row>
        );
    }
}

export default App;