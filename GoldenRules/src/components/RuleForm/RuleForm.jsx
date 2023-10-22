import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';  // Importez axios pour envoyer des requêtes HTTP
import "./RuleForm.css";

const RuleForm = ({ rules, setRules }) => {
  // ...
  
  function submitForm(event) {
    event.preventDefault();
    if (window.confirm("Une nouvelle règle va Être créer ") === true) {
      fetch('http://localhost:3000/api/rules', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: fields.title,
          description: fields.description,
          likes: 0,
          dislikes: 0,
          tags: [],
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Rule added:', data);
          navigate('/');
        })
        .catch((error) => {
          console.error('Error adding rule:', error);
        });
    } else {
      console.log('Cancelled');
    }
  }
  
  
  // ...
};

export default RuleForm;
