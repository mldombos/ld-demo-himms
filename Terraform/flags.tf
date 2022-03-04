resource "launchdarkly_feature_flag_environment" "brandOn" {
  flag_id           = launchdarkly_feature_flag.brandImage.id
  env_key           = "dev"
  on = true

//  rules {
//    clauses {
//      attribute = "company"
//      op        = "matches"
//      values    = ["LaunchDarkly"]
//      negate    = false
//    }
//  }
  fallthrough {
		variation = 0
	}
	off_variation = 1
}

resource "launchdarkly_feature_flag" "testFlag" {
  project_key = launchdarkly_project.terraform.key
  key         = "testFlag"
  name        = "Testing Flag"
  description = "This flag changes the size of the image on our page"

  variation_type = "string"
  variations {
    value       = "Cody"
    name        = "Small"
    description = "Reduce the size of the image"
  }
  variations {
    value       = "Jan"
    name        = "Normal"
    description = "Standard image size"
  }

  variations {
    value       = "Tom"
    name        = "Normal"
    description = "Standard image size"
  }
  
  defaults {
    on_variation = 1
    off_variation = 0
  }

  tags = [
    "terraform"
  ]
}

resource "launchdarkly_feature_flag_environment" "testFlagStatus" {
  flag_id           = launchdarkly_feature_flag.testFlag.id
  env_key           = "dev"
  on = true

 rules {
   clauses {
     attribute = "company"
     op        = "matches"
     values    = ["LaunchDarkly"]
     negate    = false
   }
 }
  fallthrough {
		variation = 0
	}
	off_variation = 1
}