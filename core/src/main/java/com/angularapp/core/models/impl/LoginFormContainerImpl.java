/*
 * ***********************************************************************
 * Angular App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Angular App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Angular App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Angular App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Angular App.
 * ***********************************************************************
 */

package com.angularapp.core.models.impl;

import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.Image;
import com.angularapp.core.models.LoginFormContainer;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    LoginFormContainer.class,
    ComponentExporter.class
}, resourceType = "angularapp/components/login-form-container")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class LoginFormContainerImpl
    implements LoginFormContainer
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String subTitle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String url;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Image myImage;
    @SlingObject
    private Resource resource;

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public String getSubTitle() {
        return subTitle;
    }

    @Override
    @JsonProperty("url")
    public String getUrl() {
        return url;
    }

    @Override
    public Image getMyImage() {
        return myImage;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
