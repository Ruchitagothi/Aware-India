# from rest_framework import serializers
# from Crime.models import Crime_report  # Assuming you have a User model

# class CrimeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=crime_model
#         fields = ['report_number', 'date_reported', 'date_of_occurrence','time_of_occurrence','city','crime_code','crime_description',
#         'victim_age','victim_gender','weapon_used','crime_domain','police_deployed','case_closed','date_case_closed','state']
# class RegisterCrimeSerializer(serializers.ModelSerializer):
#         class Meta:
#             model = Crime_report
#             fields = '__all__' 
from rest_framework import serializers
from Crime.models import Crime_report 

class CrimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crime_report  # Use the correct model
        fields = [
            'report_number', 'date_reported', 'date_of_occurrence',
            'time_of_occurrence', 'city', 'crime_code', 'crime_description',
            'victim_age', 'victim_gender', 'weapon_used', 'crime_domain',
            'police_deployed', 'case_closed', 'date_case_closed', 'state'
        ]

class RegisterCrimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crime_report  # Ensure this is correct
        fields = '__all__'  # Include all fields in the model
