from rest_framework import serializers

from .models import CandidateInfo, Contacts, Education, Experience, Skills


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = "__all__"


class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = "__all__"


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = "__all__"


class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacts
        fields = "__all__"


class CandidateInfoSerializer(serializers.ModelSerializer):
    contacts = ContactsSerializer(many=False)
    education = EducationSerializer(many=True)
    skills = SkillsSerializer(many=True)
    experience = ExperienceSerializer(many=True)

    class Meta:
        model = CandidateInfo
        fields = "__all__"
