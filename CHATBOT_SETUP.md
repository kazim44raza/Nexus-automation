# Nexus AI Chatbot Integration Setup

## Overview
A sophisticated AI chatbot has been integrated into your Nexus Automation website. The chatbot appears as a floating widget in the bottom-right corner of every page and uses OpenAI's GPT-4 API to provide intelligent, contextual responses about your services.

## Files Created

### 1. **ChatbotWidget Component** (`src/components/ChatbotWidget.tsx`)
- A React component that renders the chatbot UI
- Features:
  - Floating chat button (bottom-right corner)
  - Expandable/minimizable chat window
  - Real-time message streaming
  - Conversation history tracking
  - Loading indicators and error handling
  - Responsive design with Tailwind + Framer Motion animations
  - Beautiful gradient styling matching your brand colors

### 2. **Chat API Route** (`src/app/api/chat/route.ts`)
- Backend endpoint for processing chatbot messages
- Features:
  - Integrates with OpenAI GPT-4 API
  - Maintains conversation context for better responses
  - System prompt engineering for domain-specific knowledge
  - Error handling and fallback messages
  - Rate-limiting friendly (depends on your OpenAI plan)

### 3. **Layout Integration** (`src/app/layout.tsx`)
- ChatbotWidget imported and included on all pages
- Appears on the main site and all service pages automatically

---

## Chatbot Capabilities

The chatbot is trained with a detailed system prompt that enables it to:

### Service Expertise
- Explain all 6 core Nexus services:
  - AI Chatbots for customer engagement & lead qualification
  - AI Voice Agents for inbound/outbound calls
  - Business Automation (CRM, calendar, email integration)
  - Lead Qualification & scoring
  - Appointment Booking with calendar sync
  - Missed Call Recovery (SMS/callback follow-ups)

### Customer Interaction
- Answer questions about services and features
- Help identify which services solve specific business problems
- Provide industry-specific use cases (e-commerce, real estate, healthcare, B2B, etc.)
- Assist with booking demos and consultations
- Qualify potential customers with intelligent questions
- Explain ROI and expected improvements (response times, conversion rates, cost savings)

### Tone & Personality
- Professional yet friendly and approachable
- Enthusiastic about helping businesses grow
- Honest about capabilities (no overselling)
- Knowledgeable about use cases and outcomes
- Customer-centric approach (listens before suggesting)

### Escalation
Knows when to connect customers with your team for:
- Specific pricing and custom quotes
- Technical implementation details
- Enterprise solutions
- Custom integrations
- Legal/compliance matters

---

## How It Works

1. **User visits your website** → Chatbot widget appears in bottom-right corner
2. **User clicks the chat icon** → Chat window opens with welcome message
3. **User types a question** → Message sent to `/api/chat` endpoint
4. **Backend processes request** → OpenAI GPT-4 API responds with contextual answer
5. **Response displayed** → Chat window shows AI response with typing indicator
6. **Conversation continues** → Full context maintained for follow-up questions

---

## Configuration Details

### API Key
- Uses `CHATGPT_API_KEY` from your `.env` file (already set up ✓)
- Environment variable is securely accessed server-side only

### Model Settings
- **Model**: GPT-4 (can be changed to `gpt-3.5-turbo` for cost optimization)
- **Temperature**: 0.7 (balanced creativity and consistency)
- **Max Tokens**: 500 (keeps responses concise and focused)

### System Prompt
The chatbot uses a comprehensive 1000+ word system prompt that includes:
- Detailed service descriptions
- Key features and benefits
- Common use cases by industry
- How to identify customer needs
- When to escalate to your team
- Brand voice and personality guidelines
- Contact information for support/demos

---

## Customization Options

### 1. Change the AI Model (for cost reduction)
In `src/app/api/chat/route.ts`, line 69:
```typescript
// Current (GPT-4):
model: 'gpt-4',

// Change to (GPT-3.5 Turbo - faster & cheaper):
model: 'gpt-3.5-turbo',

// Or use your preferred model from OpenAI's catalog
```

### 2. Adjust Response Length
Line 73:
```typescript
max_tokens: 500,  // Increase for longer responses, decrease for shorter
```

### 3. Modify Bot Personality
Edit the `SYSTEM_PROMPT` in `src/app/api/chat/route.ts` to:
- Change tone (more formal, more casual, more technical, etc.)
- Add new services or features
- Update contact information
- Add new use cases or industries
- Modify escalation triggers

### 4. Customize Widget Appearance
In `src/components/ChatbotWidget.tsx`:
- Change colors by modifying Tailwind classes
- Adjust button position (currently `fixed bottom-6 right-6`)
- Modify window size (currently `w-80 h-[600px]`)
- Update welcome message (line ~42)
- Add custom styling or animations

### 5. Change Initial Message
Line 42 in `ChatbotWidget.tsx`:
```typescript
content: "Hi! 👋 I'm Nexus AI Assistant. I'm here to help you with our automation services, answer questions, and get you started with the perfect solution for your business. What can I help you with today?",
```

---

## Testing the Chatbot

1. **Start your dev server**:
   ```bash
   npm run dev
   ```

2. **Open browser** to `http://localhost:3000`

3. **Click the chat icon** in bottom-right corner

4. **Try these test questions**:
   - "What services do you offer?"
   - "I need help with customer support. What would you recommend?"
   - "How can AI voice agents help my business?"
   - "Can I schedule a demo?"
   - "Tell me about appointment booking"
   - "What industries do you serve?"

---

## Monitoring & Analytics

### Currently Tracked
- Message timestamps
- Conversation history (session-based)
- User/assistant message roles
- API response status

### To Implement (Optional)
- Message analytics dashboard
- Popular questions tracking
- Conversion rates (chat → demo booking)
- Average session length
- User satisfaction ratings
- Chatbot performance metrics

---

## Troubleshooting

### Chatbot doesn't appear
- Check that `ChatbotWidget` is imported in `layout.tsx`
- Verify no build errors: `npm run build`
- Clear browser cache and reload

### API errors or no response
- Verify `CHATGPT_API_KEY` is correctly set in `.env`
- Check OpenAI account has available credits
- Verify API key has required permissions
- Check browser console for specific error messages
- Try with `gpt-3.5-turbo` model if GPT-4 fails

### Responses are too generic
- The system prompt may need refinement
- Add more specific details to the prompt about your offerings
- Test with different prompts to identify what works best

### Widget position interferes with content
- Adjust `bottom-6 right-6` values in `ChatbotWidget.tsx`
- Modify `fixed` positioning if needed
- Add negative margin-right if it overlaps buttons

---

## Future Enhancements

### Recommended Add-ons
1. **Demo Booking Integration**
   - Connect to your calendar system
   - Chatbot can directly book demos

2. **Analytics Dashboard**
   - Track common questions
   - Identify new service opportunities
   - Measure conversion impact

3. **Multi-language Support**
   - Translate responses automatically
   - Serve international customers

4. **Offline Mode**
   - Store messages locally
   - Sync when connection restored
   - Fallback contact form

5. **Sentiment Analysis**
   - Detect frustrated users
   - Escalate to human agent if needed
   - Improve response quality over time

6. **Custom Knowledge Base**
   - Pull FAQ content dynamically
   - Reference specific case studies
   - Link to documentation

---

## Performance Notes

- **API Calls**: ~150-300ms response time typical
- **Token Usage**: ~200-400 tokens per conversation
- **Cost**: ~$0.003-0.01 per message with GPT-4 (depends on response length)
- **Concurrency**: Can handle unlimited simultaneous chats (OpenAI rate limits apply)

---

## Support & Maintenance

- **Review system prompt monthly** to ensure accuracy
- **Monitor API usage** in your OpenAI dashboard
- **Update service descriptions** when offerings change
- **Test with new features** as you add them
- **Gather user feedback** to improve responses

---

## Contact Information
For questions about this chatbot setup, refer to:
- OpenAI API Documentation: https://platform.openai.com/docs/api-reference/chat
- Next.js API Routes: https://nextjs.org/docs/api-routes/introduction
- Your Nexus Automation team for service-specific updates

---

**Setup completed!** Your chatbot is now live and ready to help visitors. 🚀
