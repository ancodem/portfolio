from django.contrib import admin

from .models import CandidateInfo, Contacts, Education, Experience, Skills


# Register your models here.


class AdminCandidateInfo(admin.ModelAdmin):
    list_display = ("full_name",)


class AdminSkills(admin.ModelAdmin):
    list_display = ("skill_name",)


class AdminContacts(admin.ModelAdmin):
    list_display = ("email", "phone_number", "git_hub", "git_flic", "vk")


class AdminEducation(admin.ModelAdmin):
    list_display = ("edu_type", "edu_description")


class AdminExperience(admin.ModelAdmin):
    list_display = ("exp_type", "exp_description")


admin.site.register(CandidateInfo, AdminCandidateInfo)
admin.site.register(Experience, AdminExperience)
admin.site.register(Education, AdminEducation)
admin.site.register(Contacts, AdminContacts)
admin.site.register(Skills, AdminSkills)
