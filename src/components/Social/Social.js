import React from 'react';
import SessionHeader from '../SessionHeader/SessionHeader';
import CategorySliders from '../../components/CategorySliders/CategorySliders';
import YesNoQuestions from '../../components/YesNoQuestions/YesNoQuestions';
import './Social.css';

const Social = () => {
  return (
    <div className="Social">
      <SessionHeader
        title={'Social/Emotional Developmental Capacities'}
        headings={[]}
        databaseNamesArray={[]}
      />

      <div className="category-content">
        <CategorySliders
          title={"DIR FEDLS's"}
          slidersArray={[
            'Regulation',
            'Engagement',
            'Reciprocity',
            'Problem Solving',
            'Representational/Symbolic Thinking',
            'Triangular Thinking',
            'Comparative Thinking',
            'Reflective'
          ]}
          databaseNamesArray={[
            'soc_1_regulation',
            'soc_1_engagement',
            'soc_1_reciprocity',
            'soc_1_problem',
            'soc_1_representation',
            'soc_1_triangular',
            'soc_1_comparative',
            'soc_1_reflective'
          ]}
        />

        <CategorySliders
          title={'Implicit/Explicit'}
          slidersArray={[]}
          databaseNamesArray={[]}
        />

        <CategorySliders
          title={'Social Cognition Core Components'}
          slidersArray={[
            'Self/Other Awareness',
            'Joint Attention',
            'Social Referencing',
            'Imitation',
            'Inferential Thinking/Intention',
            'Contingent Interaction/Reciprocal Actions',
            'Theory of Mind',
            'Central Coherence',
            'Mentalizing',
            'Empathy',
            'Social Perspective',
            'Social Motivators AAAA',
            'Pro-Social Motivation - Moral'
          ]}
          databaseNamesArray={[
            'soc_2_self_awareness',
            'soc_2_joint',
            'soc_2_social_referencing',
            'soc_2_imitation',
            'soc_2_inferential',
            'soc_2_contingent',
            'soc_2_theory',
            'soc_2_central',
            'soc_2_mentalizing',
            'soc_2_empathy',
            'soc_2_social_perspective',
            'soc_2_social_motivators',
            'soc_2_pro_social'
          ]}
        />

        <CategorySliders
          title={'Emotional Processing'}
          slidersArray={[
            'Affective/Valence Response',
            'Emotional Contagion',
            'Activation of Low-Routes',
            'Emotional Cascade',
            'Activation of High-Routes',
            'Emotional Differentiation',
            'Emotional Association and Memory',
            'Self-Control',
            'Self-Regulation',
            'Self-Compassion'
          ]}
          databaseNamesArray={[
            'soc_3_affective',
            'soc_3_emotional_contagion',
            'soc_3_activation_low',
            'soc_3_emotional_cascade',
            'soc_3_activation_high',
            'soc_3_emotional_differentiation',
            'soc_3_emotional_association',
            'soc_3_self_control',
            'soc_3_self_regulation',
            'soc_3_self_compassion'
          ]}
        />

        <YesNoQuestions
          title={'Other Questions'}
          questionsArray={[
            'Mental Health Support Indicated?',
            'Thoughts and/or emotions require intervention or medication?',
            'Attachment related care needed?',
            'Trauma informed care needed?'
          ]}
          databaseNamesArray={[
            'soc_4_mental',
            'soc_4_thoughts',
            'soc_4_attachments',
            'soc_4_trauma'
          ]}
        />
      </div>
    </div>
  );
};

export default Social;
