import React, { useEffect, useContext, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Context from '../context/';

const Chat = () => {
  const {
    reload,
    who,
    chat,
    setChat,
    loading,
    setLoading,
    setReload,
    newMsg,
    setNewMsg,
    antispam,
    setAntispam
  } = useContext(Context);
  const [stopscroll, setStopscroll] = useState(false);

  const ref = useRef();

  //FETCH REVIEWS FROM SELECTED CIRCUS
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/chat`)
      .then(function(response) {
        // handle success
        setChat(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload, loading]);

  useEffect(() => {
    if (ref.current && !stopscroll) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight
      });
      console.log('scroll top');
    }
  }, [loading, reload, stopscroll]);

  const handleSubmit = () => {
    if (newMsg !== '') {
      setLoading(true);
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/chat`, {
          name: who.firstname,
          message: newMsg
        })
        .then(res => res.data)
        .catch(function(error) {
          console.log(error);
        })
        .finally(function() {
          setTimeout(() => {
            setAntispam(Date());
            setReload(reload + 1);
            setLoading(false);
            setNewMsg('');
          }, 500);
        });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setReload(reload + 1);
      console.log('chat refresh');
    }, 5000);
  }, [reload, setReload]);

  if (chat && who) {
    return (
      <Container>
        <Row
          noGutters
          style={{
            height: 'auto',
            maxHeight: '70vh',
            overflow: 'auto',
            marginBottom: '1vh'
          }}
          ref={ref}
          className="scrollhide"
          onMouseOver={() => setStopscroll(true)}
          onMouseLeave={() => setStopscroll(false)}
        >
          {chat.map((msg, index) => (
            <Card.Body
              key={index}
              className={index % 2 ? 'chatcard leftchat' : 'chatcard rightchat'}
              style={{
                maxWidth: '80%',
                minWidth: '51%',
                padding: '6px',
                borderRadius: '5px',
                marginBottom: '10px'
              }}
            >
              <cite style={{ color: '#bbb' }}>
                <span className="text-info" style={{ fontWeight: 'bold' }}>
                  {msg.name} :{' '}
                </span>
                {msg.message}
              </cite>
            </Card.Body>
          ))}
        </Row>
        <Row
          noGutters
          className="d-flex justify-content-end"
          style={{
            position: 'absolute',
            bottom: '10px',
            width: '100%',
            right: '18px'
          }}
        >
          <Form.Control
            as="textarea"
            required
            defaultValue={newMsg}
            placeholder="Postez un message"
            value={newMsg}
            onChange={e => setNewMsg(e.target.value)}
            style={{
              display: 'inline-block',
              width: '68%',
              height: 'auto',
              marginRight: '5%',

              backgroundColor: 'rgba(0,0,0,0.2)',
              color: 'white'
            }}
          />
          <Button
            disabled={loading}
            variant="outline-info"
            style={{
              display: 'inline-block',
              width: '20%',
              height: '17vh',
              maxHeight: '17vh',
              margin: '0',
              color: 'white'
            }}
            onClick={() => handleSubmit()}
          >
            {loading ? 'envoi...' : 'OK'}
          </Button>
        </Row>
      </Container>
    );
  } else {
    return <div></div>;
  }
};

export default Chat;
