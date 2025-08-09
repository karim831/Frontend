from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for your Angular app

# Path to your JSON files
SUBSCRIBERS_FILE = 'subscribers.json'
PRICING_PLANS_FILE = 'pricing-plans.json'
DISCOUNTS_FILE = 'discounts.json'

def load_subscribers():
    """Load subscribers from JSON file"""
    if os.path.exists(SUBSCRIBERS_FILE):
        with open(SUBSCRIBERS_FILE, 'r') as f:
            return json.load(f)
    else:
        # Create initial file if it doesn't exist
        initial_data = {
            "emails": [],
            "lastUpdated": datetime.now().isoformat(),
            "totalSubscribers": 0
        }
        save_subscribers(initial_data)
        return initial_data

def save_subscribers(data):
    """Save subscribers to JSON file"""
    with open(SUBSCRIBERS_FILE, 'w') as f:
        json.dump(data, f, indent=2)

def load_pricing_plans():
    """Load pricing plans from JSON file"""
    if os.path.exists(PRICING_PLANS_FILE):
        with open(PRICING_PLANS_FILE, 'r') as f:
            return json.load(f)
    else:
        return []

def save_pricing_plans(data):
    """Save pricing plans to JSON file"""
    with open(PRICING_PLANS_FILE, 'w') as f:
        json.dump(data, f, indent=2)

def load_discounts():
    """Load discounts from JSON file"""
    if os.path.exists(DISCOUNTS_FILE):
        with open(DISCOUNTS_FILE, 'r') as f:
            return json.load(f)
    else:
        return []

def save_discounts(data):
    """Save discounts to JSON file"""
    with open(DISCOUNTS_FILE, 'w') as f:
        json.dump(data, f, indent=2)

# Subscriber endpoints
@app.route('/subscribers', methods=['GET'])
def get_subscribers():
    """GET all subscribers"""
    try:
        data = load_subscribers()
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/subscribers', methods=['POST'])
def add_subscriber():
    """POST new subscriber"""
    try:
        # Get email from request
        request_data = request.get_json()
        new_email = request_data.get('email')
        
        if not new_email:
            return jsonify({'error': 'Email is required'}), 400
        
        # Load current data
        data = load_subscribers()
        
        # Check if email already exists
        if new_email in data['emails']:
            return jsonify({'error': 'Email already subscribed'}), 400
        
        # Add new email
        data['emails'].append(new_email)
        data['totalSubscribers'] = len(data['emails'])
        data['lastUpdated'] = datetime.now().isoformat()
        
        # Save updated data
        save_subscribers(data)
        
        return jsonify(data), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/subscribers/<email>', methods=['DELETE'])
def remove_subscriber(email):
    """DELETE a subscriber"""
    try:
        data = load_subscribers()
        
        if email in data['emails']:
            data['emails'].remove(email)
            data['totalSubscribers'] = len(data['emails'])
            data['lastUpdated'] = datetime.now().isoformat()
            save_subscribers(data)
            return jsonify(data)
        else:
            return jsonify({'error': 'Email not found'}), 404
            
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Pricing Plans endpoints
@app.route('/pricing-plans', methods=['GET'])
def get_pricing_plans():
    """GET all pricing plans"""
    try:
        plans = load_pricing_plans()
        return jsonify(plans)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/pricing-plans/<plan_type>', methods=['GET'])
def get_pricing_plan(plan_type):
    """GET specific pricing plan by type"""
    try:
        plans = load_pricing_plans()
        plan = next((p for p in plans if p['type'].lower() == plan_type.lower()), None)
        
        if plan:
            return jsonify(plan)
        else:
            return jsonify({'error': 'Plan not found'}), 404
            
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Discount endpoints
@app.route('/discounts', methods=['POST'])
def add_discount():
    """POST new discount request"""
    try:
        request_data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'phone', 'description']
        for field in required_fields:
            if field not in request_data:
                return jsonify({'error': f'{field} is required'}), 400
        
        # Basic email validation
        email = request_data.get('email')
        if '@' not in email or '.' not in email:
            return jsonify({'error': 'Invalid email format'}), 400
        
        discounts = load_discounts()
        
        # Create new discount request
        new_discount = {
            'name': request_data['name'],
            'email': request_data['email'],
            'phone': request_data['phone'],
            'description': request_data['description'],
            'submittedAt': datetime.now().isoformat(),
            'id': len(discounts) + 1  # Simple ID generation
        }
        
        discounts.append(new_discount)
        save_discounts(discounts)
        
        return jsonify({
            'message': 'Discount request submitted successfully',
            'discount': new_discount
        }), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/pricing-plans', methods=['POST'])
def add_pricing_plan():
    """POST new pricing plan"""
    try:
        request_data = request.get_json()
        
        # Validate required fields
        required_fields = ['type', 'img', 'price', 'period', 'infos']
        for field in required_fields:
            if field not in request_data:
                return jsonify({'error': f'{field} is required'}), 400
        
        plans = load_pricing_plans()
        
        # Check if plan type already exists
        if any(p['type'].lower() == request_data['type'].lower() for p in plans):
            return jsonify({'error': 'Plan type already exists'}), 400
        
        # Add new plan
        new_plan = {
            'type': request_data['type'],
            'img': request_data['img'],
            'price': float(request_data['price']),
            'period': request_data['period'],
            'infos': request_data['infos']
        }
        
        plans.append(new_plan)
        save_pricing_plans(plans)
        
        return jsonify(new_plan), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/pricing-plans/<plan_type>', methods=['PUT'])
def update_pricing_plan(plan_type):
    """UPDATE a pricing plan"""
    try:
        request_data = request.get_json()
        plans = load_pricing_plans()
        
        # Find the plan to update
        plan_index = next((i for i, p in enumerate(plans) if p['type'].lower() == plan_type.lower()), None)
        
        if plan_index is None:
            return jsonify({'error': 'Plan not found'}), 404
        
        # Update plan fields
        for key, value in request_data.items():
            if key in ['type', 'img', 'price', 'period', 'infos']:
                if key == 'price':
                    plans[plan_index][key] = float(value)
                else:
                    plans[plan_index][key] = value
        
        save_pricing_plans(plans)
        return jsonify(plans[plan_index])
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/pricing-plans/<plan_type>', methods=['DELETE'])
def delete_pricing_plan(plan_type):
    """DELETE a pricing plan"""
    try:
        plans = load_pricing_plans()
        
        # Find and remove the plan
        plan_to_remove = next((p for p in plans if p['type'].lower() == plan_type.lower()), None)
        
        if plan_to_remove:
            plans.remove(plan_to_remove)
            save_pricing_plans(plans)
            return jsonify({'message': f'Plan {plan_type} deleted successfully'})
        else:
            return jsonify({'error': 'Plan not found'}), 404
            
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='localhost', port=8080, debug=True)